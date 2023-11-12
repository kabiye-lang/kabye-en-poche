import { Fragment, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native'
import { ListItem } from 'react-native-ui-lib'

import * as Application from 'expo-application'
import { Link, router } from 'expo-router'

import { BookOpenText, CaretRight, Users } from '@/components/icons'
import { Text, View } from '@/components/themed'

export default function ResourcesScreen() {
  const { t } = useTranslation()
  const listItems = [
    {
      title: t('resources.items.support.title'),
      items: [
        {
          href: '/about/terms-and-conditions',
          title: t('resources.items.support.terms_and_conditions.title'),
          description: '',
          icon: <BookOpenText weight="thin" />,
          external: true,
        },
        {
          href: '/about/contact',
          title: t('resources.items.support.contact.title'),
          icon: <Users weight="thin" />,
          external: true,
        },
      ],
    },
  ]
  const renderListItem = useCallback(
    (item: (typeof listItems)[0]['items'][0]) => (
      <ListItem
        key={'listItemSub-' + item.href}
        style={{ height: 50 }}
        onPress={
          item.external
            ? () => {
                router.push({
                  pathname: '/webv',
                  params: { url: `${process.env.EXPO_PUBLIC_WEBSITE_URL}${item.href}` },
                })
              }
            : undefined
        }
      >
        <ListItem.Part left>{item.icon}</ListItem.Part>
        <ListItem.Part middle column>
          <Text lg marginL-10>
            {item.title}
          </Text>
          {item.description && (
            <Text sm marginL-10>
              {item.description}
            </Text>
          )}
        </ListItem.Part>
        <ListItem.Part right>
          <CaretRight weight="thin" size={22} />
        </ListItem.Part>
      </ListItem>
    ),
    []
  )

  return (
    <View flex>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
        {/* <AppBar title="Mon compte" /> */}
        {listItems.map((listItem) => {
          return (
            <View key={'listItem-' + listItem.title} marginB-40>
              <Text h4 family="fig6">
                {listItem.title}
              </Text>
              {listItem.items.map((item) => {
                if (item.external) {
                  return <Fragment key={item.href}>{renderListItem(item)}</Fragment>
                }
                return (
                  // @ts-expect-error Type 'string' is not assignable to type 'StaticRoutes | RelativePathString | `http${string}`
                  <Link asChild href={item.href} key={item.href}>
                    {renderListItem(item)}
                  </Link>
                )
              })}
            </View>
          )
        })}
        <View marginB-30>
          <Text>
            Version {Application.nativeApplicationVersion} ({Application.nativeBuildVersion})
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

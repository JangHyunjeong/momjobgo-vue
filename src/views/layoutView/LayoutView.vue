<template>
    <div>
      <v-app>
        <v-navigation-drawer app>
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="selectedItem"
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
              >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

  
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
  
        <v-app-bar app>
          <!-- 상단 앱바 -->
        </v-app-bar>
  
        <!-- Sizes your content based upon application components -->
        <v-main>
  
          <!-- Provides the application the proper gutter -->
          <v-container fluid>
  
            <!-- If using vue-router -->
            <router-view>
  
            </router-view>
          </v-container>
        </v-main>
  
        <v-footer app>
          <!-- -->
          푸터
        </v-footer>
      </v-app>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LayoutView',
  
    data: () => ({
      selectedItem: 0,
        items: [
          { text: 'Home', icon: 'home', to: '/' },
          { text: 'About', icon: 'info', to: '/about' },
        ],
    }),
  };
  </script>
  
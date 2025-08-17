<template>
  <NuxtLayout>
    <Grid>
      <Row>
        <Column css-class="col-md-8">
          <main>
            <ContentDoc v-slot="{ doc }">
              <article>
                <h1 class="me-heading me-heading--xxl me-heading--page-title">
                  <span class="me-subheading me-subheading--50">Project</span>
                  {{ doc.title }}
                </h1>
                <ContentRenderer :value="doc" class="nuxt-content" />
              </article>
            </ContentDoc>
          </main>
        </Column>
        <Column css-class="col-md-4"></Column>
      </Row>
    </Grid>
  </NuxtLayout>
</template>
<script setup lang="ts"></script>

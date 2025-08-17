<template>
  <Grid>
    <Row>
      <Column css-class="col-md-8">
        <main>
          <ContentDoc v-slot="{ doc }">
            <article>
              <h1 class="me-heading me-heading--xxl me-heading--page-title">
                {{ doc.title }}
                <span class="me-subheading">{{ articleDate }}</span>
              </h1>
              <ContentRenderer :value="doc" class="nuxt-content" />
            </article>
          </ContentDoc>
        </main>
      </Column>
      <Column css-class="col-md-4"></Column>
    </Row>
  </Grid>
</template>
<script setup lang="ts">
const { page } = useContent()
const articleDate = new Date(page.value.date).toLocaleDateString( 'en-GB', {day: 'numeric', month: 'long', year: 'numeric'})
</script>
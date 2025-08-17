<template>
  <NuxtLayout>
    <Grid>
      <Row class="me-heading-section">
        <Column css-class="col-md-8">
          <main>
            <ClientOnly>
              <h1 class="me-heading me-heading--xxl me-heading--page-title">
                <a
                  href="#"
                  @click="shuffleThings"
                  style="text-decoration: none"
                  aria-description="Click to reshuffle things I am not"
                  >{{ things[0] }}. {{ things[1] }}. {{ things[2] }}.</a
                >
                <span class="me-subheading me-subheading--inline"> I am none of these things.</span>
              </h1>
            </ClientOnly>
          </main>
        </Column>
        <Column css-class="col-md-4"></Column>
      </Row>
      <Row>
        <Column css-class="col-md-12">
          <hr class="me-hr" />
        </Column>
      </Row>
      <Row>
        <Column css-class="col-md-12">
          <h2 class="me-heading me-heading--xxl">Projects</h2>
          <div class="me-page-grid">
            <nuxt-link
              :to="project._path"
              v-for="project in projects"
              :key="project._id"
              class="me-page-grid__card"
            >
              <div
                class="me-page-grid__page-image"
                :style="{ backgroundImage: `url(${project.img})` }"
              ></div>
              <h3 class="me-heading me-heading--l me-page-grid__page-name">
                <span>{{ project.title }}</span>
              </h3>
              <p class="me-page-grid__page-description">{{ project.description }}</p>
            </nuxt-link>
          </div>
          <hr class="me-hr" />
        </Column>
      </Row>
      <Row>
        <Column css-class="col-md-9">
          <h2 class="me-heading me-heading--xxl">Contact me</h2>
          <div class="nuxt-content">
            <p>You can email me at <a href="mailto:matt@matteason.me">matt@matteason.me</a>.</p>
            <p>I'm also on (in descending order of how often I check them):</p>
            <ul>
              <li>
                <a href="https://bsky.app/profile/matteason.me">Bluesky: @matteason.me</a>
              </li>
              <li>
                <a href="https://github.com/matteason">GitHub: @matteason</a>
              </li>
              <li><a href="https://twitter.com/MattEason">Twitter/X: @MattEason</a></li>
              <li>
                <a href="https://mastodon.online/@MattEason"
                  >Mastodon: @MattEason@mastodon.online</a
                >
              </li>
            </ul>
            <p>
              If you've found something I've done useful or fun or if you just pity me you can
              <a href="https://github.com/sponsors/matteason">sponsor me on GitHub</a> or
              <a href="https://ko-fi.com/matteason">buy me a coffee on Ko-fi</a>. Thank you!
            </p>
          </div>
        </Column>
      </Row>
    </Grid>
  </NuxtLayout>
</template>

<script setup lang="ts">
function shuffle(array: Ref<String[]>) {
  let currentIndex = array.value.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array.value[currentIndex], array.value[randomIndex]] = [
      array.value[randomIndex],
      array.value[currentIndex]
    ]
  }

  return array
}

let things = ref([
  'Entrepreneur',
  'Philanthropist',
  'Author',
  'Actor',
  'Investor',
  'Influencer',
  'Artist',
  'Comedian',
  'Communicator',
  'Scientist',
  'Chef',
  'Strategist',
  'CEO',
  'Evangelist',
  'Thought leader',
  'Thinker',
  'Doctor',
  'Expert',
  'Mentor',
  'Dancer',
  'Choreographer',
  'Cartographer',
  'Social commentator',
  'CTO',
  'Mime',
  'Vlogger'
])

shuffle(things)

function shuffleThings(e: Event) {
  shuffle(things)
  e.preventDefault()
}

const projects = await queryContent('projects').sort({ displayOrder: 1 }).find()
</script>

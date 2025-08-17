<template>
  <div>
    <header class="me-page-header">
      <Grid>
        <Row>
          <Column css-class="col-md-8">
            <a href="/" title="Home" class="me-page-header__logo"> Matt Eason </a>
          </Column>
          <Column css-class="col-md-4" />
        </Row>
      </Grid>
    </header>
    <slot />
    <footer class="me-page-footer">
      <Grid>
        <Row>
          <Column class="col-md-12">
            <hr class="me-hr" />
          </Column>
        </Row>
        <Row class="me-page-footer__row">
          <Column css-class="col-md-12">
            <a href="/" title="Home" class="me-page-footer__logo"> ME </a>
          </Column>
        </Row>
      </Grid>
    </footer>
  </div>
</template>
<script setup lang="ts"></script>

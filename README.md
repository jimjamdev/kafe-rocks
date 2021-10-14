## Thought process - shoot yourself in the foot

So, I decided (shooting myself), that I would try a few things here. Mainly css modules, a Base component and being able to pass all styling as properties. This is similar to css-in-js solutions i've worked on over the years.

Instead of just having card.scss, and card.theme.scss i thought i'd try something different. Didn't 100% work and it's not as performant as pre-rendered classNames.
But essentially having any component and passsing dynamic styling via props i.e 

```<Title as="h1" color="primary" size="large">```

It makes more sense from a dynamic perspective if you're getting component settings from a database.

This has only been used on a few components and not all properties are passed. The rest of the components are just variables in a styles/theme folder.

I guess it would be good to know what you guys are doing. We have a few options:-

- Basic SCSS. All styles and responsiveness just embedded in the component style sheet - Fastest
- Rendering out classes and just making use of classNames - bloated
- Making dynamic properties that are switchable on the fly - slower and can get bloated as need responsive properties

### Best Solution

So, I'm probably biased here. And I know performance isn't as good as pre-rendered classes. But with SSR, i reckon a css-in-js solution like styled-components it's the way to go.
I've been doing that for 3-4 years now for more dynamic theming and it's makes a big difference.

So for example:

```
theme.buttonSizes = {
  small: {
    fontSize: '12px',
    padding: '10px 16px',
    fontWeight: '700',
  },
  medium: {
    fontSize: '16px',
    padding: '12px 32px',
    fontWeight: '700',
  },
  large: {
    fontSize: '22px',
    padding: '18px 64px',
    fontWeight: '700',
  },
}
```

with css-in-js, we can easily make a component like so ```<Title size={['large', 'medium']}>some title</title>```
So, by passing an array 'large' is applied on mobile, and 'medium' tablet and above.

Hint: I've not had time to finish off and I'm getting chased. So things to do are:
- Clean-up
- Unit tests
- Some eslint and beautify plugins (import order etc)
- SEO using React Head
- Move page/index code into a template
- Add more font styles, line-heights etc
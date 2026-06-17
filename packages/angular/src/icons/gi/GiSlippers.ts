import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-slippers",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSlippers {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M130.6 34.34c-1.2-0.01-2.30.01-3.40.06-15.40.7-29.3 7.72-42.28 20.01-14.83 14.04-27.93 35.01-38.34 59.49-20.17 47.5-30.15 108-28.08 155.8 73.62 43.9 144.9 33.2 202.8 11.7 2.8-50.2-0.5-110.8-13.9-159.2-7-25.15-16.7-46.93-28.9-62.24C166.3 44.65 152 35.78 134 34.5c-1.2-0.1-2.3-0.15-3.4-0.16zm250.80.01c-1.10.01-2.30.06-3.40.14-18 1.28-32.3 10.15-44.5 25.46-12.3 15.31-21.9 37.1-28.9 62.25-13.4 48.4-16.7 109-14 159.2 58 21.5 129.2 32.2 202.8-11.7 2.1-47.8-7.9-108.3-28-155.8-10.4-24.48-23.5-45.45-38.3-59.49-13-12.29-26.9-19.31-42.3-20.01v-0.01c-1.1-0.04-2.2-0.06-3.4-0.04zM43.29 302.1c-0.82 53.7 5.15 110.3 27.53 148.3C86.63 477.3 119 493 146.5 492.2c13.8-0.4 26-4.7 35-12.9 8.9-8.2 15.1-20.6 15.8-39.3 1.3-35.3-6.8-73.1-9.7-111.6-0.5-5.9-0.7-11.7-0.8-17.6-43.5 10.1-92.88 11.4-143.51-8.7zm425.41 0c-50.7 20.2-100 18.8-143.5 8.7-0.1 5.8-0.4 11.7-0.9 17.5-2.9 38.6-10.9 76.4-9.6 111.70.7 18.7 6.9 31.1 15.8 39.3 8.9 8.2 21.2 12.5 34.9 12.9 27.60.8 59.9-14.9 75.7-41.8 22.5-38 28.3-94.6 27.6-148.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSlippers;

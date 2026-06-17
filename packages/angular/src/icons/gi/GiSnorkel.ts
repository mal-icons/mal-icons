import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-snorkel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSnorkel {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M353.5 16c-15 0-15 15-15 30v60a15 15 0 0 0-15 15v30a15 15 0 0 0 15 15v210c0 33.14-26.86 60-60 60s-60-26.86-60-60c0 0 15-15 15-30s45-30 45-45-15-15-15-15-8.56 8.59-20.72 18.25A15 15 0 0 0 218.5 316a15 15 0 0 0 0.72 4.53C208.73 326.59 197.89 331 188.5 331c-9.37 0-20.21-4.39-30.69-10.44A15 15 0 0 0 158.5 316a15 15 0 0 0-24.28-11.78C122.07 294.56 113.5 286 113.5 286s-15 0-15 15 45 30 45 45 15 30 15 30c0 66.27 53.73 120 120 120s120-53.73 120-120V166a15 15 0 0 0 15-15v-30a15 15 0 0 0-15-15V46c0-15 0-30-15-30h-30z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSnorkel;

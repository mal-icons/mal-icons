import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-rugby-conversion",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiRugbyConversion {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M247 18v135.19c5.95-3.1 11.95-6.06 18-8.89V18h-18zm192 0v247.6l-174-0.69v-60.46c-6.18 5.9-12.18 11.91-18 18V311h18v-28.09l174 0.69V311h18V18h-18zm-80.1 71.91c-7.02-0.18-15.59 2.47-20.54 6.46-7.92 6.39-14.47 22.53-9.15 29.13 5.31 6.59 22.48 3.63 30.41-2.75 7.93-6.39 14.47-22.53 9.16-29.13-1.99-2.47-5.65-3.6-9.87-3.71zm-54.12 57.33C168.5 198.27 48.38 324.17 25.04 471.8l17.32 3.37c15.16-100.11 61.74-149.5 92.28-179.86C120.17 337.77 79.38 405.92 78.27 482.15l21.61 4.2c4.24-108.05 78.03-244.59 204.9-339.1zM241.07 329v158h30V329h-30zm191.62 0v158h30V329h-30z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiRugbyConversion;

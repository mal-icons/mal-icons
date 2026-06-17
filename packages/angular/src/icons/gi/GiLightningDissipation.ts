import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-lightning-dissipation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLightningDissipation {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M36.48 18.31l68.09 108.87-66.24 57.56 98.52 117.49-15.18 61.19 31.71 47.36c-7.1 4.97-13.8 10.48-20.04 16.46L68.27 346.8l30.28-15.14-80.19-122.71v78.92l25.94 34.96-17.66 31.54 33.83 33.49-24.6 37.48 60.45 54.41c-1.99 4.44-3.8 8.97-5.41 13.6h317.2c-1.93-5.55-4.14-10.95-6.6-16.21l64.03-65.49-51.27-58.76 2.41-9.87 17.65-35.84 38.89 29.16 20.45-24.05v-94.18l-37.71 64.08-35.9-31.76-35.46 145.22-38.77 15.21c-9.88-6.92-20.55-12.8-31.86-17.49l74.93-104.86-23.67-39.68 48.47-72.35-93.78 7.5 45.83-79.63 33.91 31.18 69.22-117.23h-21.7l-51.87 87.84-34.11-31.36-63.89 111.01-25.52 2.04 95.91-169.53h-134.18l-53.64 245.23 85.87-22.9-28.32 49.21-53.7 16 7.63 85.09c-7.64 2.81-15.01 6.16-22.07 10l-27.48-41.04 15.48-62.39-6.64-7.92-59.22-102.59 85.75-45.5-47.24-123.17H36.48zm283.88 207.76l-86 155.25c-8.450.75-16.72 2.11-24.75 4.06l-5.92-65.99 46.2-13.76 41.31-71.78 29.16-7.77zm33.33 39.95l12.87 21.58-71.02 99.4c-6.51-1.84-13.18-3.29-19.99-4.35l78.14-116.62zm55.14 109.08l31.26 35.83-47.92 49.01c-8.19-13.21-18.14-25.19-29.55-35.6l37.8-14.83 8.4-34.41zM74.02 401.27l43.66 43.21c-4.53 5.75-8.7 11.81-12.46 18.13l-44.93-40.43 13.73-20.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLightningDissipation;

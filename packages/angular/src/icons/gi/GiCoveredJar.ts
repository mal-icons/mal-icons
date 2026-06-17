import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-covered-jar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCoveredJar {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 20.5c-5.37 0-11.97 2.87-17.6 7.8-5.63 4.93-10.08 11.76-11.74 17.64-0.92 3.25 1.54 14.61 5.8 23.9 2.48 5.4 4.82 9.6 6.62 12.66h33.83c1.8-3.06 4.14-7.27 6.62-12.66 4.26-9.29 6.72-20.64 5.8-23.9-1.66-5.88-6.1-12.71-11.74-17.64-5.64-4.93-12.23-7.8-17.6-7.8zm-34.88 66.8c-15.95 2.54-29.66 7.06-40.23 13.89-16.04 10.37-25.86 25.57-27.54 50.54 100.17 14.31 105.14 14.31 205.31 0-1.68-24.97-11.5-40.17-27.54-50.54-10.57-6.83-24.28-11.35-40.23-13.89-2.98 5.46-5.33 9.09-5.33 9.09l-2.66 4.11h-53.79l-2.66-4.11s-2.35-3.63-5.33-9.09zm-84.89 80.18C80.02 193.33 80 237.63 80 259.5c0 64 32 136 64 200 16 16 64 32 112 32s96-16 112-32c32-64 64-136 64-200 0-21.87-0.02-66.17-56.23-92.02l-6.490.93c-112 16-114.55 16-226.55 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCoveredJar;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-africa",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAfrica {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M201.56 19.5l-87.79 9.13-73.74 94.81v52.68l56.19 61.81 64.61-13.34 49.16 9.83-10.53 37.93 33.71 61.1-16.85 42.84 39.79 116.23 53.62-8.77 49.16-55.48 4.21-38.63 31.61-23.88-6.32-69.53 83.59-106.99-51.99 7.26-79.36-138.36-125.02-8.43-14.05-30.2zm252.35 319.8l-14.4 20.86-13.410.5c-11.85 24.32-12.6 38.02-13.91 66.55l17.38 4.47 21.85-52.15 2.48-40.23z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAfrica;

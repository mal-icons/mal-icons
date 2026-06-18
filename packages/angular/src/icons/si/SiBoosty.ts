import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-boosty",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBoosty {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.66 14.34 6.8 0h6.36L11.88 4.44l-0.040.08-3.38 11.73h3.15c-1.32 3.29-2.35 5.87-3.09 7.73-5.82-0.06-7.44-4.23-6.02-9.15M8.55 24l7.67-11.03h-3.25l2.83-7.07c4.850.51 7.14 4.33 5.79 8.95C20.16 19.81 14.34 24 8.68 24h-0.13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBoosty;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-scala",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiScala {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.59 24c4.54 0 13.81-1.52 14.82-3v-5.73c-0.96 1.41-10.28 2.91-14.82 2.91V24zM4.59 16.36c4.54 0 13.81-1.52 14.82-3V7.64c-0.96 1.41-10.28 2.91-14.82 2.91v5.82zM4.59 8.73c4.54 0 13.81-1.52 14.82-3V0C18.45 1.41 9.13 2.91 4.59 2.91v5.82z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiScala;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-schema",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSchema {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 10.5v0.5h-3v-0.5c0-0.83-0.67-1.5-1.5-1.5h-1V7h1c0.83 0 1.5-0.67 1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5h-4C4.67 1 4 1.67 4 2.5v3C4 6.33 4.67 7 5.5 7h1v2h-1C4.67 9 4 9.67 4 10.5v3c0 0.830.67 1.5 1.5 1.5h1v2h-1c-0.83 0-1.50.67-1.5 1.5v3c0 0.830.67 1.5 1.5 1.5h4c0.83 0 1.5-0.67 1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5h-1v-2h1c0.83 0 1.5-0.67 1.5-1.5V13h3v0.5c0 0.830.67 1.5 1.5 1.5h4c0.83 0 1.5-0.67 1.5-1.5v-3c0-0.83-0.67-1.5-1.5-1.5h-4c-0.83 0-1.50.67-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSchema;

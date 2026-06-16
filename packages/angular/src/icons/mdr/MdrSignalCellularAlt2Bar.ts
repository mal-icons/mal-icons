import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-signal-cellular-alt-2-bar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSignalCellularAlt2Bar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.5 20c-0.83 0-1.5-0.67-1.5-1.5v-3c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5v3c0 0.83-0.67 1.5-1.5 1.5zm6 0c-0.83 0-1.5-0.67-1.5-1.5v-8c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5v8c0 0.83-0.67 1.5-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSignalCellularAlt2Bar;

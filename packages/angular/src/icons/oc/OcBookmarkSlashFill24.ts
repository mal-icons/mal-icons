import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-bookmark-slash-fill-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcBookmarkSlashFill24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m3.23 2.17 18.5 15.5a0.750.75 0 1 1-0.96 1.15L19 17.34v3.91a0.750.75 0 0 1-1.220.59L12 17.21l-5.78 4.63A0.750.75 0 0 1 5 21.25L4.95 5.57 2.27 3.33a0.750.75 0 1 1 0.96-1.15ZM7.42 2h9.83c0.97 0 1.750.78 1.75 1.75v8.07a0.750.75 0 0 1-1.230.57L6.94 3.33A0.750.75 0 0 1 7.42 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcBookmarkSlashFill24;

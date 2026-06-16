import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-signal-cellular-nodata",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSignalCellularNodata {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m676-114-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83-84 83ZM80-80l800-800v466q-14-9-28.5-16.5T820-443v-293L224-140h350q9 17 21.5 32T622-80H80Zm144-60 596-596-183 183-140.5 140.5-128 128L224-140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSignalCellularNodata;

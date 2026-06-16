import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-signal-cellular-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSignalCellularAdd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m80-80 800-800v468q-14-8-28.84-14.5Q836.32-433 820-437v-299L224-140h353q8 17 18.46 32.09Q605.92-92.82 619-80H80Zm660 0v-120H620v-60h120v-120h60v120h120v60H800v120h-60Zm-516-60 596-596-187.5 187.5L490-406 363.45-279.45 224-140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSignalCellularAdd;

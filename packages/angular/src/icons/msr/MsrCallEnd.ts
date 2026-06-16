import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-call-end",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCallEnd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-640q126 0 241 50.5T918-443q8 10 8.5 22t-8.5 21l-94 94q-8 8-23 9t-24-6l-114-85q-6-5-9-11t-3-13v-139q-42-16-85.5-22.5T480-580q-42 0-85.5 6.5T309-551v139q0 7-3 13t-9 11l-114 85q-12 9-24.5 8T136-306l-94-94q-9-9-8.5-21t8.5-22q82-96 197-146.5T480-640ZM244-526q-39 19-73.5 45.5T104-424l57 59 83-61v-100Zm467-4v98l87 66 58-58q-32-33-68.5-58.5T711-530Zm-467 4Zm467-4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCallEnd;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-collapse-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCollapseAll {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-275 311-106q-9 9-21 9t-21-9q-9-9-9-21t9-21l169-169q17-17 42-17t42 17l169 169q9 9 9 21t-9 21q-9 9-21 9t-21-9L480-275Zm0-411 169-169q9-9 21-9t21 9q9 9 9 21t-9 21L522-644q-17 17-42 17t-42-17L269-813q-9-9-9-21t9-21q9-9 21-9t21 9l169 169Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCollapseAll;

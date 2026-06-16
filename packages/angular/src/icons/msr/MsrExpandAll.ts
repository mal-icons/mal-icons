import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-expand-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrExpandAll {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m480-168 174-174q9-9 22-9t22 9q9 9 9 22t-9 22L522-122q-17 17-42 17t-42-17L262-298q-9-9-9-22t9-22q9-9 22-9t22 9l174 174Zm0-624L306-618q-9 9-22 9t-22-9q-9-9-9-22t9-22l176-176q17-17 42-17t42 17l176 176q9 9 9 22t-9 22q-9 9-22 9t-22-9L480-792Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrExpandAll;

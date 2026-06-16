import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-text-select-jump-to-end",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTextSelectJumpToEnd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m400-334-42-42 73-74H120v-60h311l-73-74 42-42 146 146-146 146Zm380 214v-720h60v720h-60ZM609-780v-60h83v60h-83Zm0 660v-60h83v60h-83ZM438-780v-60h83v60h-83Zm0 660v-60h83v60h-83ZM268-780v-60h83v60h-83Zm0 660v-60h83v60h-83ZM120-780v-60h60v60h-60Zm0 660v-60h60v60h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTextSelectJumpToEnd;

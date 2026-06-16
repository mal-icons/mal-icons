import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-widgets",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssWidgets {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M679-466 466-679l213-213 213 213-213 213Zm-559-72v-301h301v301H120Zm418 418v-301h301v301H538Zm-418 0v-301h301v301H120Zm60-478h181v-181H180v181Zm502 51 129-129-129-129-129 129 129 129Zm-84 367h181v-181H598v181Zm-418 0h181v-181H180v181Zm181-418Zm192-78ZM361-361Zm237 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssWidgets;

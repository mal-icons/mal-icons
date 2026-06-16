import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-bakery-dining",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssBakeryDining {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M481-243Zm326-18 50-57-71-134-54 147 75 44Zm-212-42h70l112-278-149-65-33 343Zm-296 0h69l-31-343-146 63 108 280Zm-142 42 75-44-54-147-71 139 50 52Zm271-42h107l36-397H393l35 397ZM142-190 35-301l115-223-37-96 219-89-4-51h309l-4 52 225 89-39 98 107 217-100 114-107-53H244l-102 53Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssBakeryDining;

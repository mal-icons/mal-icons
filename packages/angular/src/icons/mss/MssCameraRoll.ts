import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-camera-roll",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssCameraRoll {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M880-160H560v80H80v-760h120v-80h240v80h120v80h320v600Zm-60-60v-480H500v-80H140v640h360v-80h320Zm-440-60h60v-60h-60v60Zm0-300h60v-60h-60v60Zm160 300h60v-60h-60v60Zm0-300h60v-60h-60v60Zm160 300h60v-60h-60v60Zm0-300h60v-60h-60v60ZM140-780v640-640Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssCameraRoll;

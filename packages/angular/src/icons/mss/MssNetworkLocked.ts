import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-network-locked",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNetworkLocked {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m80-80 800-800v408h-60v-264L225-140h396v60H80Zm593 0v-206h42v-40q0-36 23.5-61t58.5-25q35 0 58 25t23 61v40h42v206H673Zm82-206h84v-40q0-19.55-11.5-32.77Q816-372 796.5-372T766-358.77Q755-345.55 755-326v40ZM514-430Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNetworkLocked;

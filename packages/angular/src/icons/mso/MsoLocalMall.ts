import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-local-mall",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoLocalMall {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-80q-24.75 0-42.37-17.62T120-140v-530q0-24.75 17.63-42.37T180-730h110q0-78 53.5-134T475-920q80.93 0 137.96 55Q670-810 670-730h110q24.75 0 42.38 17.63T840-670v530q0 24.75-17.62 42.38T780-80H180Zm0-60h600v-530H180v530Zm300-290q79 0 137-58t58-137h-60q0 55-40 95t-95 40q-55 0-95-40t-40-95h-60q0 79 58 137t137 58ZM350-730h260q0-55-37.5-92.5T480-860q-55 0-92.5 37.5T350-730ZM180-140v-530 530Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoLocalMall;

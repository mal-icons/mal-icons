import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-local-mall",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssLocalMall {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-80v-650h170q0-78 53.5-134T475-920q80.93 0 137.96 55Q670-810 670-730h170v650H120Zm60-60h600v-530H180v530Zm300-290q79 0 137-58t58-137h-60q0 55-40 95t-95 40q-55 0-95-40t-40-95h-60q0 79 58 137t137 58ZM350-730h260q0-55-37.5-92.5T480-860q-55 0-92.5 37.5T350-730ZM180-140v-530 530Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssLocalMall;

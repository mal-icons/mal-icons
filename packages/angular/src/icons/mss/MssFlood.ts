import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-flood",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssFlood {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-80v-60q34-3 54.5-21.5T208-180q53 0 75.5 20t60.5 20q38 0 60.5-20t75.5-20q53 0 76 20t60 20q38 0 60.5-25t75.5-25q53 0 73.5 23.5T880-140v60q-42 0-68.5-25T752-130q-33 0-58 25t-78 25q-53 0-78-20t-58-20q-33 0-58 20t-78 20q-53 0-78-20t-58-20q-33 0-59.5 20T80-80Zm264-190q-53 0-78-20t-58-20q-33 0-59.5 20T80-270v-60q34-3 54.5-21.5T208-370q11 0 22.5 1.5T251-364l-51-185-62 77-47-38 300-370 445 170-22 56-92-35 86 321q18 10 36.5 24t35.5 13v61q-42 0-68.5-25T752-320q-33 0-58 25t-78 25q-53 0-78-20t-58-20q-33 0-58 20t-78 20Zm0-60q31 0 55.5-17.5T456-369l-37-136 136-36 55 211q38 4 62.5-22t69.5-28l-90-336-241-93-164 202 74 274q7 2 12 2.5t11 0.5Zm151-237Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssFlood;

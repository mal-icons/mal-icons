import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-lan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLan {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-80q-24.75 0-42.37-17.62T120-140v-150q0-24.75 17.63-42.37T180-350h60v-100q0-24.75 17.63-42.37T300-510h150v-100h-60q-24.75 0-42.37-17.62T330-670v-150q0-24.75 17.63-42.37T390-880h180q24.75 0 42.38 17.63T630-820v150q0 24.75-17.62 42.38T570-610h-60v100h150q24.75 0 42.38 17.63T720-450v100h60q24.75 0 42.38 17.63T840-290v150q0 24.75-17.62 42.38T780-80H600q-24.75 0-42.37-17.62T540-140v-150q0-24.75 17.63-42.37T600-350h60v-100H300v100h60q24.75 0 42.38 17.63T420-290v150q0 24.75-17.62 42.38T360-80H180Zm210-590h180v-150H390v150ZM180-140h180v-150H180v150Zm420 0h180v-150H600v150ZM480-670ZM360-290Zm240 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLan;

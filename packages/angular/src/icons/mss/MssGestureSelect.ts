import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-gesture-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssGestureSelect {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-480v-60h60v60H40Zm820 0v-60h60v60h-60ZM40-650v-60h60v60H40Zm820 0v-60h60v60h-60ZM40-820v-60h60v60H40Zm170 340v-60h60v60h-60Zm480 0v-60h60v60h-60Zm170-340v-60h60v60h-60Zm-650 0v-60h60v60h-60Zm160 0v-60h60v60h-60Zm160 0v-60h60v60h-60Zm160 0v-60h60v60h-60ZM433-40q-21.88 0-41.94-8T355-72L158-270l53-54 119 34v-390h60v470l-123-35 131 130q7 8 15.5 11.5T433-100h187q38 0 64-26.44 26-26.44 26-63.56v-200h60v200q0 63-43.5 106.5T620-40H433Zm24-290v-190h60v190h-60Zm126 0v-140h60v140h-60Zm37 230H398h222Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssGestureSelect;

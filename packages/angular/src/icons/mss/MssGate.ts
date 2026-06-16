import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-gate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssGate {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-280v-400h60v400H80Zm120 80v-410q0-63 44-106.5T350-760h260q63 0 106.5 43.5T760-610v410H200Zm620-80v-400h60v400h-60ZM480-480ZM260-260h190v-190h-80v-60h80v-190H350q-37 0-63.5 26T260-610v350Zm250 0h190v-350q0-38-26-64t-64-26H510v190h80v60h-80v190Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssGate;

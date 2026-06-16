import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-medical-information",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMedicalInformation {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M290-240h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Zm230-150h240v-40H520v40Zm0 120h160v-40H520v40ZM80-80v-600h310v-200h180v200h310v600H80Zm60-60h680v-480H570v90H390v-90H140v480Zm310-450h60v-230h-60v230Zm30 210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMedicalInformation;

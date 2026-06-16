import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-co2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCo2 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M440-366q-14.45 0-24.22-9.77Q406-385.55 406-400v-160q0-14.45 9.78-24.22Q425.55-594 440-594h120q14.45 0 24.23 9.78Q594-574.45 594-560v160q0 14.45-9.77 24.23Q574.45-366 560-366H440Zm14-48h92v-132h-92v132Zm-294 48q-14.45 0-24.22-9.77Q126-385.55 126-400v-160q0-14.45 9.78-24.22Q145.55-594 160-594h120q14.45 0 24.23 9.78Q314-574.45 314-560v34h-48v-20h-92v132h92v-20h48v33.68Q314-386 304.23-376 294.45-366 280-366H160Zm526 120v-94q0-14.45 9.78-24.22Q705.55-374 720-374h86v-52H686v-48h134q14.45 0 24.23 9.78Q854-454.45 854-440v60q0 14.45-9.77 24.23Q834.45-346 820-346h-86v52h120v48H686Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCo2;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-lab-research",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLabResearch {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-80q-83 0-141.5-58.5T120-280v-360q-33 0-56.5-23.5T40-720v-80q0-33 23.5-56.5T120-880h400q33 0 56.5 23.5T600-800v80q0 33-23.5 56.5T520-640v157q-28 21-48 50t-31 63h-91q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T350-430h110v-60H350q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T350-550h110v-90H180v360q0 58.33 40.83 99.17Q261.67-140 320-140q42 0 75-21t50-56q6 16 14.5 30.5T479-158q-28 36-69 57t-90 21Zm115-170h-85q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T350-310h80q-1 15 0.5 30t4.5 30ZM100-700h440v-120H100v120Zm0 0v-120 120Zm559.86 510Q706-190 738-221.86q32-31.86 32-78T738.14-378q-31.86-32-78-32T582-378.14q-32 31.86-32 78T581.86-222q31.86 32 78 32Zm0.14 60q-70.83 0-120.42-49.62Q490-229.23 490-300.12 490-371 539.62-420.5q49.62-49.5 120.5-49.5Q731-470 780.5-420.42 830-370.83 830-300q0 26.35-8 50.68Q814-225 799-203l86 86q9 9 9 21t-9 21q-9 9-21 9t-21-9l-86-86q-22 15-46.32 23-24.32 8-50.68 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLabResearch;

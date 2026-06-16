import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-electric-scooter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoElectricScooter {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M191-240q-46.25 0-78.62-32.32Q80-304.65 80-350.82 80-397 112.38-429.5T191-462q38 0 69 21t39 57h240q8-72 57-124.5T717-574l-63-286H496v-60h145q27 0 48.5 16t27.5 42l74 336h-22q-71.78 0-122.89 51.41Q595-423.19 595-351v27H299q-8 38-39 61t-69 23Zm0-60q21 0 36-15t15-36q0-21-15-36t-36-15q-21 0-36 15t-15 36q0 21 15 36t36 15Zm578.18 60Q723-240 690.5-272.32q-32.5-32.32-32.5-78.5Q658-397 690.32-429.5q32.32-32.5 78.5-32.5Q815-462 847.5-429.68q32.5 32.32 32.5 78.5Q880-305 847.68-272.5 815.35-240 769.18-240ZM769-300q21 0 36-15t15-36q0-21-15-36t-36-15q-21 0-36 15t-15 36q0 21 15 36t36 15ZM523-40 294-157h150v-79l229 118H523v78ZM191-351Zm578 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoElectricScooter;

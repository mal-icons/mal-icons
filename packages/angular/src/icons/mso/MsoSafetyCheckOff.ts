import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-safety-check-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSafetyCheckOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M649-389q11-20 17.5-43.5T673-481q0-79-57-136t-136-57q-25 0-48.5 6.5T388-650l261 261Zm94 94-45-46q20-35 31-89.5t11-93.5v-196l-260-96-188 69-46-46 234-88 320 119v238q0 59-15 117.5T743-295Zm67 238L670-195q-44 44-90 72T480-81q-143-39-231.5-164.5T160-524v-183L55-812l43-43 755 755-43 43ZM424-443Zm75-98Zm-19 398q42-14 80.5-39.5T628-238l-68-68q-19 9-39 13.5t-41 4.5q-79 0-136-57t-57-136q0-22 4.5-42t13.5-39l-85-85v123q0 130 73 236.5T480-143Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSafetyCheckOff;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-update-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoUpdateDisabled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M813-61 688-186q-44 32-95.5 49T483-120q-75 0-141-28.5T226.5-226q-49.5-49-78-115T120-482q0-58 17-110t49-96L61-813l43-43 752 752-43 43ZM483-180q45 0 86-13t76-36L229-645q-23 35-36 75t-13 85q0 127 88 216t215 89Zm126-427v-60h105q-44-51-103.5-82T483-780q-47 0-89 13t-79 36l-43-43q45-32 98.5-49T483-840q80 0 151.5 35T758-709v-106h60v208H609Zm-98 72-60-60v-88h60v148Zm263 263-43-43q23-36 36-78t13-88h60q0 59-17 111.5T774-272Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoUpdateDisabled;

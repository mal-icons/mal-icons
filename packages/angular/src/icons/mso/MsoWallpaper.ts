import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-wallpaper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWallpaper {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24 0-42-18t-18-42v-270h60v270h270v60H180Zm330 0v-60h270v-270h60v270q0 24-18 42t-42 18H510ZM237-268l118-152 93 127 132-171 147 196H237ZM120-510v-270q0-24 18-42t42-18h270v60H180v270h-60Zm660 0v-270H510v-60h270q24 0 42 18t18 42v270h-60Zm-156-60q-23.4 0-38.7-15.3Q570-600.6 570-624q0-23.4 15.3-38.7Q600.6-678 624-678q23.4 0 38.7 15.3Q678-647.4 678-624q0 23.4-15.3 38.7Q647.4-570 624-570Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWallpaper;

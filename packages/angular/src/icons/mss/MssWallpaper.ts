import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-wallpaper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssWallpaper {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-330h60v270h270v60H120Zm390 0v-60h270v-270h60v330H510ZM237-268l118-152 93 127 132-171 147 196H237ZM120-510v-330h330v60H180v270h-60Zm660 0v-270H510v-60h330v330h-60Zm-156-60q-23.4 0-38.7-15.3Q570-600.6 570-624q0-23.4 15.3-38.7Q600.6-678 624-678q23.4 0 38.7 15.3Q678-647.4 678-624q0 23.4-15.3 38.7Q647.4-570 624-570Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssWallpaper;

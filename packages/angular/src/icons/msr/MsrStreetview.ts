import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-streetview",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrStreetview {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M720-520q-83 0-141.5-58.5T520-720q0-83 58.5-141.5T720-920q83 0 141.5 58.5T920-720q0 83-58.5 141.5T720-520ZM147-147q-13-9-20-23t-7-30v-560q0-34 23-57t57-23h269q-14 25-21.5 55t-7.5 65q0 56 22 108t60 90L147-147Zm333 27v-218q0-44 26.5-77.5T576-457q32-8 69-10.5t75-2.5q35 0 64.5 2t55.5 8v260q0 34-23 57t-57 23H480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrStreetview;

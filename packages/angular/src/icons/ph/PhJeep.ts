import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-jeep",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhJeep {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M240,96h-9.53l-9.29-43.35A16.08,16.08,0,0,0,205.53,40H50.47A16.08,16.08,0,0,0,34.82,52.65L25.53,96H16a8,8,0,0,0,0,16h8v96a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v24a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V112h8a8,8,0,0,0,0-16ZM50.47,56H205.53l8.57,40H41.9ZM64,208H40V184H64Zm128,0V184h24v24Zm24-40H152V136a8,8,0,0,0-16,0v32H120V136a8,8,0,0,0-16,0v32H40V112H216ZM56,140a12,12,0,1,1,12,12A12,12,0,0,1,56,140Zm120,0a12,12,0,1,1,12,12A12,12,0,0,1,176,140Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhJeep;

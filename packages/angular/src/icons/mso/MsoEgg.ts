import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-egg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoEgg {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-120q-117 0-198.5-81.5T200-400q0-77 25.5-155t66-141.5Q332-760 382-800t98-40q49 0 98.5 40t90 103.5Q709-633 734.5-555T760-400q0 117-81.5 198.5T480-120Zm0-40q99.6 0 169.8-70.2Q720-300.4 720-400q0-66-22.5-136.5t-58.17-128.84q-35.67-58.34-78-96.5Q519-800 480-800q-39 0-81.5 37.5t-78 96Q285-608 262.5-537T240-400q0 99.6 70.2 169.8Q380.4-160 480-160Zm25-81q8.5 0 14.25-5.75T525-261q0-8.5-5.75-14.25T505-281q-58.33 0-99.17-40.83Q365-362.67 365-421q0-8.5-5.75-14.25T345-441q-8.5 0-14.25 5.75T325-421q0 74.7 52.65 127.35Q430.3-241 505-241Zm-25-239Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoEgg;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-attribution",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAttribution {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M436-207h88v-180h59v-230H377v230h59v180Zm44 127q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-83.73 31-156.86Q142-710 196-764t127-85q73-31 157-31 83.73 0 156.86 31Q710-818 764-764t85 127.14Q880-563.73 880-480q0 84-31 157t-85 127q-54 54-127.14 85T480-80Zm0-60q145 0 242.5-97.5T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 145 97.5 242.5T480-140Zm0-506q23.4 0 38.7-15.3Q534-676.6 534-700q0-23.4-15.3-38.7Q503.4-754 480-754q-23.4 0-38.7 15.3Q426-723.4 426-700q0 23.4 15.3 38.7Q456.6-646 480-646Zm0 166Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAttribution;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-share-windows",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrShareWindows {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M329.83-370Q317-370 308.5-378.62T300-400v-210q0-24.75 17.63-42.37T360-670h350l-92-92q-9-9-8.5-21t9.34-21q8.84-9 21-9T661-804l143 143q9 9 9 21t-9 21L661-475q-9 9-21 9t-21.12-9.05q-9.12-9.05-9.5-21.5Q609-509 618-518l92-92H360v210q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63ZM180-120q-24.75 0-42.37-17.62T120-180v-610q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T180-790v610h520v-160q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T760-340v160q0 24.75-17.62 42.38T700-120H180Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrShareWindows;

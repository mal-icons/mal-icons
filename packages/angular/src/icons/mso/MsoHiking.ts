import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-hiking",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoHiking {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m282-40 121-620q5-24 23-37t38-13q20 0 37.5 9t28.5 26l39 64q19 32 52.5 57t78.5 39v-75h40v550h-40v-414q-51-11-96-39t-80-69l-29 145 85 81v296h-60v-244l-100-95-74 339h-64Zm17-403-75-14q-10-2-17.5-13t-5.5-22l30-157q5-29 29-44.5t53-10.5l36 7-50 254Zm231-311q-30 0-51.5-21.5T457-827q0-30 21.5-51.5T530-900q30 0 51.5 21.5T603-827q0 30-21.5 51.5T530-754Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoHiking;

import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-home-work",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHomeWork {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M697-623h60v-60h-60v60Zm0 171h60v-60h-60v60Zm0 170h60v-60h-60v60Zm-56 162v-60h219v-600H465v112l-60-42v-70q0-24.61 17.63-42.31Q440.25-840 465-840h395q24.75 0 42.38 17.63T920-780v600q0 24.75-17.62 42.38T860-120H641Zm0-387ZM40-150v-329q0-14 6.5-27.5T65-528l211-151q15.97-11 34.99-11Q330-690 346-679l210 151q12 8 18.5 21.5T581-479v329q0 12.75-8.62 21.38T551-120H364v-201H258v201H70q-12.75 0-21.37-8.62T40-150Zm60-30h98v-201h226v201h97v-299L311-630 100-478.58V-180Zm324 0v-201H198v201-201h226v201Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHomeWork;

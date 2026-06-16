import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-home-max-dots",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHomeMaxDots {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-250h600q33 0 56.5-23.5T860-330v-290q0-33-23.5-56.5T780-700H180q-33 0-56.5 23.5T100-620v290q0 33 23.5 56.5T180-250Zm100 90v-30H180q-59 0-99.5-40.5T40-330v-290q0-59 40.5-99.5T180-760h600q59 0 99.5 40.5T920-620v290q0 59-40.5 99.5T780-190H680v30H280Zm140-285q12 0 21-8.62T450-475q0-12-9-21t-21.5-9q-12.5 0-21 9t-8.5 21.5q0 12.5 8.63 21T420-445Zm-120 0q12 0 21-8.62T330-475q0-12-9-21t-21.5-9q-12.5 0-21 9t-8.5 21.5q0 12.5 8.63 21T300-445Zm240 0q12 0 21-8.62T570-475q0-12-9-21t-21.5-9q-12.5 0-21 9t-8.5 21.5q0 12.5 8.63 21T540-445Zm120 0q12 0 21-8.62T690-475q0-12-9-21t-21.5-9q-12.5 0-21 9t-8.5 21.5q0 12.5 8.63 21T660-445Zm-180-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHomeMaxDots;

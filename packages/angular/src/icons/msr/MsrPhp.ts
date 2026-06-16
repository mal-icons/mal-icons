import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-php",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrPhp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M402-360q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-192q0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2v65h108v-65q0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2v192q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-79H426v79q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm-258 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-186q0-12.75 8.63-21.37T150-600h122q20 0 34 14t14 34v64q0 20-14 34t-34 14H168v56q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm24-128h104v-64H168v64Zm516 128q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2v-186q0-12.75 8.63-21.37T690-600h122q20 0 34 14t14 34v64q0 20-14 34t-34 14H708v56q0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm24-128h104v-64H708v64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrPhp;

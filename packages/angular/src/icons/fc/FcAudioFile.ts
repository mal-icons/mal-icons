import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-audio-file",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcAudioFile {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["rect",{"x":"204","fill":"none","width":"48","height":"48"}],["polygon",{"fill":"#90CAF9","points":"244,45 212,45 212,3 234,3 244,13"}],["polygon",{"fill":"#E1F5FE","points":"242.5,14 233,14 233,4.5"}],["circle",{"fill":"#1976D2","cx":"227","cy":"30","r":"4"}],["polygon",{"fill":"#1976D2","points":"234,21 229,19 229,30 231,30 231,22.9 234,24"}],["polygon",{"fill":"#90CAF9","points":"40,45 8,45 8,3 30,3 40,13"}],["polygon",{"fill":"#E1F5FE","points":"38.5,14 29,14 29,4.5"}],["circle",{"fill":"#1976D2","cx":"23","cy":"30","r":"4"}],["polygon",{"fill":"#1976D2","points":"30,21 25,19 25,30 27,30 27,22.9 30,24"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcAudioFile;

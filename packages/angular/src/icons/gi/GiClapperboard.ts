import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-clapperboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiClapperboard {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M419.68 26.2l-8.66 2.45L32.92 135.81 55.27 214.7l386.77-109.61L419.68 26.2zm-12.41 22.22l9.07 32.01-41.09-22.94 32.01-9.07zM350.77 64.44l56.8 31.71-37.08 10.51-56.8-31.71 37.08-10.51zm-61.58 17.45l56.8 31.72-37.08 10.51-56.8-31.72 37.08-10.51zm-61.57 17.45l56.8 31.72-37.08 10.51-56.8-31.71 37.08-10.51zm-61.58 17.45l56.8 31.72-37.08 10.51-56.8-31.72 37.08-10.51zm-61.57 17.45l56.8 31.72-37.08 10.51-56.8-31.71 37.08-10.51zm-45.86 26.23l41.09 22.94-32.01 9.07-9.07-32.01zM55 215v274h402V215H55zm18 18h33.27L73 266.27V233zm58.73 0h38.55l-46 46H85.73l46-46zm64 0h38.55l-46 46h-38.55l46-46zm64 0h38.55l-46 46h-38.55l46-46zm64 0h38.55l-46 46h-38.55l46-46zm64 0h38.55l-46 46h-38.55l46-46zM439 245.73V279h-33.27L439 245.73zM73 297h366v174H73V297zm248.64 46.57l-192.440.70.07 18 192.44-0.7-0.07-18zM130.7 391.33l-0.13 18 92.710.70.14-18-92.71-0.7zm127.160.7l-0.2 18 63.910.70.2-18-63.91-0.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiClapperboard;
